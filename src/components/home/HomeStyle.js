import {StyleSheet} from 'react-native';
import fontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6086FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSize.xLarge,
    textAlign: 'center',
  },
});

export default styles;
