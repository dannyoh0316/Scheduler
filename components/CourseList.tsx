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
  }[]
};

const CourseList: React.FC<Props> = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return (
    <ScrollView>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} />
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
