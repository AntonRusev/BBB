export function getCategoryStyles(category: string) {
    switch (category) {
        case "fruit":
            return "bg-orange-100 text-orange-700";
        case "vegetable":
            return "bg-lime-100 text-lime-700";
        case "nut":
            return "bg-sky-100 text-sky-700";
        default:
            return "bg-purple-100 text-purple-700"
    }
}