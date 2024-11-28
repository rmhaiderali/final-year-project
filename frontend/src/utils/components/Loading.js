export default function Loading() {
  return (
    <div className="h-[calc(100vh-210px)] flex flex-col justify-center">
      <svg className="loading mx-auto" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="14"></circle>
      </svg>
    </div>
  )
}
