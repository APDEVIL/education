import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeacherDashboard() {
  return (
    <div className="space-y-6 p-8">
      <h1 className="font-bold text-3xl">Teacher Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage courses you created.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Create quizzes for students.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Student Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View analytics and student results.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}