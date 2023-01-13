import React, { useEffect, useState} from 'react'
import { Text, View } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { services } from '../services/Services';

export default function All() {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    services('general')
    .then(data => {
      setNewsData(data)
    })
    .catch(error => {
      alert(error)
    })
  }, [])
  return (
    <NativeBaseProvider>
      <ScrollView height={850}>
        <FlatList
          data={newsData}
          renderItem={({ item }) => (
          <View>
            <View>
              <Text>
                {item.title}
              </Text>
              <Text>
                {item.publishedAt}
              </Text>
              <Text>
                {item.description}
              </Text>
            </View>
          </View> 
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </NativeBaseProvider>
    )
}

