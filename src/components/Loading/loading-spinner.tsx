export function LoadingSpinner({
  className = "",
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
        {/* <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent "> */}
          <span className="sr-only">Loading...</span>
        {/* </div> */}
    </div>
  );
}