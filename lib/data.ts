export type Lesson = {
  title: string;
  duration: string;
};

export type Module = {
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: string;
  duration: string;
  modules: Module[];
};

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Leading Through Change",
    slug: "leading-through-change",
    description:
      "Learn how to guide teams through uncertainty, build trust, and lead clear communication in times of transition.",
    level: "Intermediate",
    duration: "4 weeks",
    modules: [
      {
        title: "Understanding Change Dynamics",
        description: "Frame change with empathy and clarity.",
        lessons: [
          { title: "Why change creates resistance", duration: "12 min" },
          { title: "Building communication plans", duration: "18 min" },
        ],
      },
      {
        title: "Commanding Trust",
        description: "Create confidence when the road is unclear.",
        lessons: [
          { title: "Trust signals for leaders", duration: "15 min" },
          { title: "Rebuilding confidence after disruption", duration: "22 min" },
        ],
      },
    ],
  },
  {
    id: "course-2",
    title: "Coaching High Performers",
    slug: "coaching-high-performers",
    description:
      "Develop coaching skills that inspire accountability, deep work, and sustainable performance across a team.",
    level: "Advanced",
    duration: "5 weeks",
    modules: [
      {
        title: "Effective Coaching Conversations",
        description: "Ask the right questions and listen with purpose.",
        lessons: [
          { title: "Coaching vs managing", duration: "16 min" },
          { title: "The 5-step coaching conversation", duration: "20 min" },
        ],
      },
      {
        title: "Performance and Accountability",
        description: "Set standards and accountability without micromanaging.",
        lessons: [
          { title: "Designing growth goals", duration: "14 min" },
          { title: "Holding constructive performance reviews", duration: "18 min" },
        ],
      },
    ],
  },
  {
    id: "course-3",
    title: "Executive Communication",
    slug: "executive-communication",
    description:
      "Increase confidence, clarity, and influence through stronger speech, narrative, and executive presence.",
    level: "Foundational",
    duration: "3 weeks",
    modules: [
      {
        title: "Speaking with Impact",
        description: "Craft messages that land with clarity and urgency.",
        lessons: [
          { title: "Narratives that connect", duration: "10 min" },
          { title: "Presenting with confidence", duration: "17 min" },
        ],
      },
      {
        title: "Stakeholder Influence",
        description: "Build trust and align stakeholders around decisions.",
        lessons: [
          { title: "Listening for strategic intent", duration: "12 min" },
          { title: "Frameworks for executive updates", duration: "19 min" },
        ],
      },
    ],
  },
];

export const courseStats = [
  { label: "Active learners", value: "1,284" },
  { label: "Completion rate", value: "89%" },
  { label: "Mentors online", value: "46" },
  { label: "Avg. assessment", value: "91%" },
];

export const teamMembers = [
  { name: "Ava Nguyen", role: "Senior operations leader", score: 94 },
  { name: "Marcus Lee", role: "People manager", score: 90 },
  { name: "Priya Solanki", role: "Program lead", score: 88 },
  { name: "Daniel Brooks", role: "Team director", score: 86 },
];

export const assessments = [
  { title: "Conflict Resolution", score: 88, status: "Strong" },
  { title: "Decision Quality", score: 93, status: "Excellent" },
  { title: "Delegation Readiness", score: 79, status: "Improving" },
  { title: "Executive Presence", score: 85, status: "Strong" },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}
