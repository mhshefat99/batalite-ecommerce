import { Button } from "./ui/button";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
      <div className="bg-white border shadow-sm px-8 py-6 rounded-sm flex flex-col gap-3 items-center justify-center">
        <h3 className="text-2xl text-gray-700 bont-fold tracking-tight">
          Something went wrong 🧐
        </h3>
        <p className="font-medium text-gray-500">{error.message}</p>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </div>
    </div>
  );
}

export default ErrorFallback;
