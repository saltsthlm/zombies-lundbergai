import { ok } from "node:assert/strict";
import { test } from "node:test";

interface IRoom {
  capacity: number;
  zombies: IZombie[]
};

interface IZombie {
  name: string;
}

const createRoom = (capacity: number): IRoom => {
  return {
    capacity: capacity,
    zombies: []
  }
};

const isRoomFull = (room: IRoom) => {
  return room.capacity <= room.zombies.length;
};

const addZombie = (room: IRoom, name: string): boolean => {
  const zombie: IZombie = { name: name };

  if (room.zombies.length < room.capacity) {
    room.zombies.push(zombie);
    return true;
  } else {
    return false;
  }
}

test("room is full", () => {
  const room: IRoom = createRoom(0);

  ok(isRoomFull(room));
});

test("empty room that fits one zombie is not full", () => {
  const room: IRoom = createRoom(1);

  ok(!isRoomFull(room));
});

test("room with no capacity cannot fit any zombies", () => {
  const room: IRoom = createRoom(0);

  const added: boolean = addZombie(room, "Viktor");

  ok(!added);
});

test("one-roomer becomes full when a zombie is added", () => {
  const room: IRoom = createRoom(1);

  const added: boolean = addZombie(room, "Viktor");

  ok(isRoomFull(room));
});

test("two-roomer is not full when a zombie is added", () => {
  const room: IRoom = createRoom(2);

  const added: boolean = addZombie(room, "Viktor");

  ok(!isRoomFull(room))
});

test.skip("second zombie consumes first zombie when added to a one-roomer", () => { });

// You are free to add more tests that you think are relevant!
