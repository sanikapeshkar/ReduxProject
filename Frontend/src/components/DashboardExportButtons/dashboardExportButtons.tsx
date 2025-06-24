import { Button } from "@/components/ui/button"

export function ActionButtons() {
  return (
    <div className="flex justify-center gap-4">
      <Button size="lg">View Detailed Reports</Button>
      <Button variant="outline" size="lg">
        Export Data
      </Button>
    </div>
  )
}