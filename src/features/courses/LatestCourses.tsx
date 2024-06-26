import { useEffect, useState } from 'react';
import CourseItem from './CourseItem.tsx';
import { getCourses } from '@/services/apiCourses';
import List from '@/ui/List.tsx';

function LatestCourses({ count }) {
  const [courses, setCourses] = useState(null);
  useEffect(
    function () {
      async function fetchCourses() {
        // const res = await getRecentCourses({ count });
        const res = await getCourses();
        const courseCount = count || res.length;
        setCourses(res.slice(Math.max(res.length - courseCount, 0)));
      }

      fetchCourses();
    },
    [setCourses],
  );
  return (
    <List
      items={courses}
      render={(item: object) => <CourseItem key={item.id} item={item} />}
    />
  );
}

export default LatestCourses;
