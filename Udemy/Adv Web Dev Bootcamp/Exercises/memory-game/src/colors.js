class Colors{

  static colors = [
    "#212738", "#F97068", "#D1D646", "#57C4E5",
    "#B4A0E5", "#CA3CFF", "#1E1014", "#BCC4DB",
    "#C0A9B0", "#7880B5", "#6987C9", "#6BBAEC",
    "#1C7C54", "#73E2A7", "#DEF4C6", "#78FFD6",
    "#DB5461", "#8AA29E", "#FFA3AF", "#FFD639",
    "#FBAF00", "#007CBE", "#00AF54", "#023C40",
    "#C3979F", "#0AD3FF",
  ]

  static getUnique(colorList){
    let color;
    do
      color = Colors.random()
    while(colorList.includes(color))
    return color;
  }

  static random = () => {
    let ci = Math.floor(Math.random() * Colors.colors.length)
    return Colors.colors[ci]
  }

}

export default Colors
