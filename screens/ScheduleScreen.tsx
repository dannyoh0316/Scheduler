import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CourseList from '../components/CourseList';
import UserContext from '../UserContext';
import { firebase } from '../firebase';



const Banner: React.FC<{ title: string }> = ({ title }) => (
  <Text style={styles.banner}>{ title || '[loading...]' }</Text>
);

const ScheduleScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';

  const [schedule, setSchedule] = useState({ title: '', courses: [] });

  const view = (course: { id: string; title: string; meets: string; }) => {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', {course});
  };

  const fixCourses = json => ({
    ...json,
    courses: Object.values(json.courses)
  });

  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = (snap: { val: () => any; }) => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    }
    db.on('value', handleData, (error: any) => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  banner: {
    color: '#888',
    fontSize: 32,
  },
});

export default ScheduleScreen;
