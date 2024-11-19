import { Button } from "@/components/ui/button";

export default function BlogFilter({ categories, selectedCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
