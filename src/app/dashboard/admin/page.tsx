"use client";

import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="space-y-6 p-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Users */}
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>Manage students and teachers.</p>

            <Button
              className="w-full"
              onClick={() => router.push("/users")}
            >
              Open Users
            </Button>
          </CardContent>
        </Card>


        {/* Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Analytics</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>View system usage and reports.</p>

            <Button
              className="w-full"
              onClick={() => router.push("/analytics")}
            >
              View Analytics
            </Button>
          </CardContent>
        </Card>


        {/* Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Courses</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>Monitor all courses on the platform.</p>

            <Button
              className="w-full"
              onClick={() => router.push("/course")}
            >
              Manage Courses
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}