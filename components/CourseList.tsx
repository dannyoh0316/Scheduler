import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import { getCourseTerm } from '../utils/course';


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

const CourseList: React.FC<Props> = ({ courses, view }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return (
    <ScrollView>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} view={view} />
    </ScrollView>
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

export default CourseList;
