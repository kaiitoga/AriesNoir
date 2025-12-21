import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoading } from '../../App'

export const CustomLink = ({ to, children, className, onClick, ...props }) => {
  const navigate = useNavigate()
  const { startLoading } = useLoading()

  const handleClick = (e) => {
    e.preventDefault()

    // 既存のonClickハンドラーがあれば実行
    if (onClick) {
      onClick(e)
    }

    // ローディングを開始
    startLoading()

    // 少し遅延させてナビゲーション実行
    setTimeout(() => {
      navigate(to)
    }, 10)
  }

  return (
    <a
      href={to}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}