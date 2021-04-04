import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/family/Main.vue'
import BogoItdaMonth from '@/views/family/BogoItdaMonth.vue'
import BogoItdaDaily from '@/views/family/BogoItdaDaily.vue'
import QuizItdaList from '@/views/family/QuizItdaList.vue'
import QuizItdaMakeQuestion from '@/views/family/QuizItdaMakeQuestion.vue'
import QuizItdaModifyQuestion from '@/views/family/QuizItdaModifyQuestion.vue'
import QuizItdaQuestion from '@/views/family/QuizItdaQuestion.vue'
import Splash from "@/views/senior/Splash.vue";
import SeniorMain from "@/views/senior/SeniorMain.vue";
import SeniorLogin from "@/views/senior/SeniorLogin.vue";
import PhotoDiaryLoading from "@/views/senior/PhotoDiaryLoading.vue";
import PhotoDiary from "@/views/senior/PhotoDiary.vue";
import PhotoDiaryResult from "@/views/senior/PhotoDiaryResult.vue";
import DailyExerciseLoading from "@/views/senior/DailyExerciseLoading.vue";
import DailyExercise from "@/views/senior/DailyExercise.vue";
import DailyExerciseResult from "@/views/senior/DailyExerciseResult.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      title: '잇다 :: 감성 돌봄 서비스',
    },
  },
  {
    path: "/family/report",
    name: "BogoItdaMonth",
    component: BogoItdaMonth,
    meta: {
      title: '보고잇다 | 달력',
    },
  },
  {
    path: "/family/report/daily",
    name: "BogoItdaDaily",
    component: BogoItdaDaily,
    meta: {
      title: '보고잇다 | 일일 보고서',
    },
  },
  {
    path: "/family/quiz",
    name: "QuizItdaList",
    component: QuizItdaList,
    meta: {
      title: '퀴즈잇다 | 내가 낸 문제 목록',
    },
  },
  {
    path: "/family/quiz/make",
    name: "QuizItdaMakeQuestion",
    component: QuizItdaMakeQuestion,
    meta: {
      title: '퀴즈잇다 | 문제내기',
    },
  },
  {
    path: "/family/quiz/modify/:questionId",
    name: "QuizItdaModifyQuestion",
    component: QuizItdaModifyQuestion,
    meta: {
      title: '퀴즈잇다 | 문제수정',
    },
  },
  {
    path: "/family/quiz/detail/:questionId",
    name: "QuizItdaQuestion",
    component: QuizItdaQuestion,
    meta: {
      title: '퀴즈잇다 | 문제보기',
    },
  },
  {
    path: '/senior/splash',
    name: 'Splash',
    component: Splash,
    meta: {
      title: '잇다 :: 감성 돌봄 서비스',
    },
  },
  {
    path: '/senior/main',
    name: 'SeniorMain',
    component: SeniorMain,
    meta: {
      title: '잇다 :: 감성 돌봄 서비스',
    },
  },
  {
    path: '/senior/login',
    name: 'SeniorLogin',
    component: SeniorLogin,
    meta: {
      title: '잇다 | 로그인',
    },
  },
  {
    path: '/senior/photodiary/loading',
    name: 'PhotoDiaryLoading',
    component: PhotoDiaryLoading,
    meta: {
      title: '잇다 :: 감성 돌봄 서비스',
    },
  },
  {
    path: '/senior/photodiary',
    name: 'PhotoDiary',
    component: PhotoDiary,
    meta: {
      title: '잇다 | 사진일기장',
    },
  },
  {
    path: '/senior/photodiary/result',
    name: 'PhotoDiaryResult',
    component: PhotoDiaryResult,
    meta: {
      title: '잇다 | 사진일기장',
    },
  },
  {
    path: '/senior/exercise/loading',
    name: 'DailyExerciseLoading',
    component: DailyExerciseLoading
  },
  {
    path: '/senior/exercise',
    name: 'DailyExercise',
    component: DailyExercise
  },
  {
    path: '/senior/exercise/result',
    name: 'DailyExerciseResult',
    component: DailyExerciseResult
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
})
router.beforeEach((to, from, next) => {
  /* 페이지 제목 바꾸기 */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router
