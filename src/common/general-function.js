export const uriByENV = (env) => {
  switch (env) {
    case 0:
      return '/'
    case 1:
      return '/member-birthday-countdown/'
    default:
      return '/'
  }
}

export const findColorClass = (key) => {
  switch (key) {
    case "AKB48":
      return "pink"
    case "Nogizaka46":
      return "purple"
    default:
      return ""
  }
}