# Calendso
## Full Stack Calendly Clone with Next JS, React, Tailwind CSS, Prisma, NeonDB, Clerk, Shadcn UI

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## Running the Project with Docker

Follow the steps below to build and run the project using Docker.

---

### Prerequisites
- Install [Docker](https://www.docker.com/get-started) on your machine.

---

### Steps to Run the Project

#### 1. Clone the Repository
Clone the project repository to your local machine:
```bash
git clone https://github.com/your-repo-name/project-name.git
cd project-name
```

#### 2. Build the Docker Image
Run the following command to build the Docker image:
```bash
docker build -t your-app-name .
```
- `Note`: Replace your-app-name with a name for your Docker image.

#### 3. Run the Docker Container
Start a container using the built image:
```bash
docker run -p 3000:3000 your-app-name
```
- `Note`: The application will be accessible at `http://localhost:3000`.


