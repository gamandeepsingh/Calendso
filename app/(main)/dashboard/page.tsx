"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usernameSchema } from "@/lib/validator";
import useFetch from "@/hooks/useFetch";
import { updateUsername } from "@/actions/user";

type FormDataSchema = {
  username: string | null | undefined;
};

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormDataSchema>({
    resolver: zodResolver(usernameSchema),
  });

  const [origin, setOrigin] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setValue("username", user?.username);
    }
  }, [isLoaded]);

  const { loading, error, fn: updateUserName } = useFetch(updateUsername);

  const onSubmit = async (data: any) => {
    updateUserName(data.username); // Pass the username in an object
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.fullName}</CardTitle>
        </CardHeader>
        {/* Latest Updates */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span>
                  {origin}/
                </span>
                <Input {...register("username")} placeholder="username" className="w-min" />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{String(errors.username.message)}</p>
              )}
              {/* {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )} */}
            </div>
            <Button type="submit">
              {loading ? "Updating..." : "Update"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
