import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Course from './Course';
import { hasConflict } from '../utils/course';


interface Props {
  courses: {
    id: string;
    title: string;
    meets: string;
  }[];
  view: (course: {
    id: string;
    title: string;
    meets: string;
  }) => void;
};

const CourseSelector: React.FC<Props> = ({ courses, view }) => {
  const [selected, setSelected] = useState<{ id: string; title: string; meets: string; }[] | never>([]);

  const toggle = (course: { id: string; title: string; meets: string; }) => setSelected(selected => (
    selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
  ));

  return (
    <View style={styles.courseList}>
      {
        courses.map(course => (
          <Course key={course.id}
            course={course}
            isDisabled={hasConflict(course, selected)}
            isSelected={selected.includes(course) ? true : false}
            select={toggle}
            view={view}
          />
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default CourseSelector;
