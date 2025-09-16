import { IRoom, IZombie } from "./interfaces";

export const createRoom = (capacity: number): IRoom => {
	return {
		capacity: capacity,
		zombies: []
	}
};

export const isRoomFull = (room: IRoom) => {
	return room.capacity <= room.zombies.length;
};

export const addZombie = (room: IRoom, name: string): boolean => {
	const zombie: IZombie = { name: name };

	// no capacity at all means nothing can be added
	if (room.capacity <= 0) {
		return false;
	}

	// capacity not reached
	if (room.zombies.length < room.capacity) {
		room.zombies.push(zombie);
		return true;
	} else {
		// full room, remove first element and move down all elements one position
		room.zombies.shift();
		room.zombies.push(zombie);
		return true;
	}
}