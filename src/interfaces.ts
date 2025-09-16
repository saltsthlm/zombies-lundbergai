export interface IRoom {
	capacity: number;
	zombies: IZombie[]
};

export interface IZombie {
	name: string;
}