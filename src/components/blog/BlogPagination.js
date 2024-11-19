import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPagination({ currentPage, totalPages, paginate }) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <Button
        variant="outline"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      <span className="text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
