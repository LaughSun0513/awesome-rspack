import { ref, onMounted, onUnmounted } from 'vue';
import Counter from '../components/Counter.jsx'

export default {
  name: "Home",

  setup() {
    const x = ref(0)
    const y = ref(0)

    function update(event) {
      x.value = event.pageX
      y.value = event.pageY
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return () => (
      <div class="Home">
        <h1>首页</h1>
        <div>
          鼠标的坐标是: { x.value }, { y.value }
        </div>
        <Counter/>
      </div>
    );
  },
};
