"use client";
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { BsStars } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { MdOpenInNew } from "react-icons/md";

// 需要轮换的词汇，可按需扩展（打字机效果）
const KEYWORDS = ['主办活动', '参与活动', '认识朋友', '交友聊天', '探索未知'];

export default function HomePage() {

  return (
    <main className="flex flex-1 flex-col justify-center text-center py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4">
        <div className="space-y-6">
          {/* 顶部徽章 */}
          <div className="relative inline-flex">
            <div className="relative rounded-full bg-gradient-to-b from-white/10 to-white/0 p-[1px] shadow-sm">
              <div className="flex items-center gap-2 rounded-full bg-fd-background/80 px-4 py-2 backdrop-blur text-sm md:text-base text-fd-foreground/90">
                <span className="relative flex items-center gap-1 rounded-full px-3 py-1 text-[12px] leading-none font-thin text-fd-foreground/90">
                  <span aria-hidden className="absolute inset-0 rounded-full bg-blue-600/25 ring-1 ring-blue-400/40 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-sm" />
                  <span className="relative flex items-center gap-1">
                    <BsStars className="animate-pulse text-blue-300 text-[14px]" />
                    <span className="uppercase tracking-wide text-[11px] font-bold text-blue-100">New</span>
                  </span>
                </span>
                <Link href="/docs" className="group flex items-center gap-1 hover:text-fd-foreground transition-colors">
                  <span className="text md:text-base">Telegram BOT 已经开始公测</span>
                  <span className="transition-transform group-hover:translate-x-0.5 text-[16px] md:text-[18px]"><GoArrowRight /></span>
                </Link>
              </div>
              {/* 发光环 */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-md" />
            </div>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">一个人太孤寂？</span>
            <span className="block mt-2">快来LANKO{' '}
              <TypewriterWords words={KEYWORDS} />
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-base text-fd-muted-foreground md:text-lg">
            在这里随时随地都可以发起你的活动，仅需几步，即可轻松搞定活动的组织与管理，让每一次聚会都充满乐趣与期待！
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/signin" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500 transition-colors">
              开始使用
            </Link>
            <Link href="/docs" className="group rounded-full bg-fd-muted px-7 py-3 text-sm font-semibold text-fd-foreground/90 hover:bg-fd-muted/80 transition-colors inline-flex items-center gap-2 min-w-[150px] justify-center">
              <span className="flex items-center gap-2">
                <span>查看文档</span>
                <MdOpenInNew className="text-base opacity-80 group-hover:opacity-100 transition-opacity" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;      // 每个字符的毫秒
  deleteSpeed?: number;    // 删除时每个字符毫秒
  holdTime?: number;       // 打完一个词后停顿
}

function TypewriterWords({
  words,
  typeSpeed = 120,
  deleteSpeed = 60,
  holdTime = 1200,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>('typing');
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    function step(timestamp: number) {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      let interval = typeSpeed;
      if (phase === 'deleting') interval = deleteSpeed;
      if (phase === 'holding') interval = holdTime; // 用整段等待

      if (delta >= interval) {
        lastTimeRef.current = timestamp;
        if (phase === 'typing') {
          const next = currentWord.slice(0, display.length + 1);
            setDisplay(next);
            if (next === currentWord) {
              setPhase('holding');
            }
        } else if (phase === 'holding') {
          setPhase('deleting');
        } else if (phase === 'deleting') {
          const next = currentWord.slice(0, display.length - 1);
          setDisplay(next);
          if (next.length === 0) {
            setPhase('typing');
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      }
      frameRef.current = requestAnimationFrame(step);
    }
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lastTimeRef.current = 0;
    };
  }, [phase, wordIndex, words, display, typeSpeed, deleteSpeed, holdTime]);

  // 用光标效果
  return (
    <span className="relative inline-flex items-center">
      <span className="relative mx-1 leading-none whitespace-nowrap font-semibold text-blue-500 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[0.08em] after:w-full after:rounded-sm after:bg-blue-500/80">
        {display || '\u00A0'}
        <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-blue-500/90 align-middle h-[1em] translate-y-[2px]" />
      </span>
    </span>
  );
}
