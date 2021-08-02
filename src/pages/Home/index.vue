<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodyRecommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav'
import ListContainer from './ListContainer'
import TodyRecommend from './TodyRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

export default {
  name: 'Home',
  components:{
    TypeNav,
    ListContainer,
    TodyRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>


