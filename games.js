let CellType = {
	empty: "empty",
	mashroom: "mashroom",
	tree: "tree",
	efri: "efri",
	home: "home"
};

let CommandType = {
	front: "front",
	left: "left",
	right: "right"
};

let games = [
	{
		board: [
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.home},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.efri},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}]
		],
		efriPos: [3, 3],
		solution: [CommandType.front,CommandType.front, CommandType.front]
	},
	{
		board: [
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.tree},{type: CellType.mashroom},{type: CellType.home},{type: CellType.empty}],
			[{type: CellType.tree},{type: CellType.mashroom},{type: CellType.empty},{type: CellType.tree},{type: CellType.empty}],
			[{type: CellType.efri},{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}]
		],
		efriPos: [3, 0],
		solution: [CommandType.right,CommandType.front,CommandType.left,CommandType.front,CommandType.right,CommandType.front,CommandType.left,CommandType.front,CommandType.right, CommandType.front]
	},
	{
		board: [
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.home},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.mashroom},{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.tree},{type: CellType.efri, direction: "down"},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}]
		],
		efriPos: [3, 2],
		solution: [CommandType.front, CommandType.right, CommandType.front, CommandType.front, CommandType.right, CommandType.front, CommandType.front, CommandType.front, CommandType.right, CommandType.front]
	},
	{
		board: [
			[{type: CellType.home},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.mashroom},{type: CellType.mashroom},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.efri},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}]
		],
		efriPos: [3, 1],
		solution: [CommandType.right, CommandType.front, CommandType.left, CommandType.front, CommandType.front, CommandType.left, CommandType.front, CommandType.front, CommandType.right, CommandType.front]
	},
	{
		board: [
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.tree},{type: CellType.efri, direction: "left"},{type: CellType.mashroom},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.tree},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.home}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}]
		],
		efriPos: [1, 1],
		solution: [CommandType.right, CommandType.right, CommandType.front, CommandType.front, CommandType.front, CommandType.right, CommandType.front, CommandType.front]
	},
	{
		board: [
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.efri},{type: CellType.tree},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.tree},{type: CellType.mashroom},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.home},{type: CellType.empty},{type: CellType.empty}]
		],
		efriPos: [1, 2],
		solution: [CommandType.right, CommandType.right, CommandType.front, CommandType.left, CommandType.front, CommandType.right, CommandType.front, CommandType.front, CommandType.right, CommandType.front]
	},
	{
		board: [
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.home},{type: CellType.empty}],
			[{type: CellType.tree},{type: CellType.empty},{type: CellType.tree},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.mashroom},{type: CellType.empty},{type: CellType.empty}],
			[{type: CellType.empty},{type: CellType.empty},{type: CellType.tree},{type: CellType.efri, direction:"right"},{type: CellType.empty}]
		],
		efriPos: [4, 3],
		solution: [CommandType.left, CommandType.front, CommandType.left, CommandType.front, CommandType.right, CommandType.right, CommandType.front, CommandType.left, CommandType.front, CommandType.front]
	}
];