import React from 'react'
import { Text, View } from 'react-native'

const MovieCard = ({id,poster_path,title,vote_average,release_date}:Movie) => {
  return (
    <View>
      <Text className='text-white text-sm'>MovieCard</Text>
    </View>
  )
}

export default MovieCard