/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { trpc } from "@/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  const { data: totalUsers, isLoading: loadingUsers } =
    trpc.analytics.totalUsers.useQuery();

  const { data: totalCourses, isLoading: loadingCourses } =
    trpc.analytics.totalCourses.useQuery();

  const { data: totalEnrollments, isLoading: loadingEnrollments } =
    trpc.analytics.totalEnrollments.useQuery();

  if (loadingUsers || loadingCourses || loadingEnrollments) {
    return <div className="p-6">Loading analytics...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-bold text-3xl">{totalUsers}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-bold text-3xl">{totalCourses}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Enrollments</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-bold text-3xl">{totalEnrollments}</p>
        </CardContent>
      </Card>

    </div>
  );
}