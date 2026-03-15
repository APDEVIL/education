import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StudentDashboard() {
  return (
    <div className="space-y-6 p-8">
      <h1 className="font-bold text-3xl">Student Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View enrolled courses.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Attempt quizzes assigned by instructors.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Track your learning progress.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}