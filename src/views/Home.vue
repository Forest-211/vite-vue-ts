<template>
	<div>
		<el-button @click="getData">button</el-button>
		<div v-if="source">
			<span>{{ source.name }}</span>
			<p class="item">
				<span>头像：</span>
				<img :src="source.avatar_url" alt="" />
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from '@/utils/axios'

export default defineComponent({
	name: 'home',
	setup() {
		const source = ref(null)
		const getData = async () => {
			const result = await axios.get('/users/changlin93')
			source.value = result.data
		}

		return {
			getData,
			source
		}
	}
})
</script>

<style lang="scss" scoped>
img {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
}
</style>
