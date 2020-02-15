import AsyncStorage from '@react-native-community/async-storage';
/**
 * 储存key-value数据
 */
export async function doSave(key, value) {
  AsyncStorage.setItem(key, value, error => {
    error && console.log(error.toString());
  });
}
/**
 * 获取key对应的数据
 */
export async function doGet(key) {
  AsyncStorage.getItem(key, (error, value) => {
    console.log(value);
    error && console.log(error.toString());
  });
}
/**
 * 移除key对应的数据
 */
export async function doRemove(key) {
  AsyncStorage.removeItem(key, error => {
    error && console.log(error.toString());
  });
}
