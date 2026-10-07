import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/lib/data";

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="page-shell narrow-shell">
      <Link href="/courses" className="back-link">
        ← Back to courses
      </Link>

      <div className="course-hero">
        <div>
          <span className="eyebrow">{course.level}</span>
          <h1>{course.title}</h1>
        </div>
        <Link href="/dashboard" className="primary-button">
          Enroll now
        </Link>
      </div>

      <p className="lead-copy">{course.description}</p>

      <section className="content-panel">
        <h2>Course breakdown</h2>
        <div className="stack-list">
          {course.modules.map((module) => (
            <div key={module.title} className="module-card">
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <ul>
                {module.lessons.map((lesson) => (
                  <li key={lesson.title}>{lesson.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
