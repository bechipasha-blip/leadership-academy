import Link from "next/link";
import { courses } from "@/lib/data";

export default function CoursesPage() {
  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Catalog</span>
          <h1>Leadership learning paths</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">
          Back to dashboard
        </Link>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <article key={course.slug} className="course-card">
            <div className="pill">{course.level}</div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <div className="meta-row">
              <span>{course.modules.length} modules</span>
              <span>{course.duration}</span>
            </div>
            <Link href={`/courses/${course.slug}`} className="primary-button inline-button">
              View details
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
