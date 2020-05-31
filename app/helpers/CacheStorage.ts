import AsyncStorage from '@react-native-community/async-storage';

class CacheStorage {
  getItem = async (key: string) => {
    let item = null;
    try {
      item = await AsyncStorage.getItem(key);
    } catch (error) {
      console.log(error);
    }

    return JSON.parse(item);
  };

  setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }

    return value;
  };

  removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  async clear() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  length = async () => {
    const keys = await AsyncStorage.getAllKeys();

    return keys.length;
  };

  async iterate(fn: () => []) {
    const keys = await AsyncStorage.getAllKeys();
    let values;
    try {
      values = await AsyncStorage.multiGet(keys);
      const mappedValues = values.map((item, index) => [keys[index], fn(item)]);
      await AsyncStorage.multiSet(mappedValues);
    } catch (error) {
      console.log(error);
    }
  }
}

export default CacheStorage;
