import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ページ遷移時にスクロール位置をページ上部へ戻す。
 * html に scroll-behavior: smooth が効いているため、
 * 遷移時だけ一時的に無効化して即座にトップへ移動する。
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname]);

  return null;
}
