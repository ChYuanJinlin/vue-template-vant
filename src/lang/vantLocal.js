import {
  Locale
} from 'vant'
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';
export function Locals() {
  if (localStorage.getItem("lang") == 'en') {
    Locale.use('en', enUS);
  } else if (localStorage.getItem("lang") == 'zh') {
    Locale.use('zh', zhCN);
  }
}
