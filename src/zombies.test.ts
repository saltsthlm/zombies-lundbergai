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

test("room is full", () => {
  const room: IRoom = createRoom(0);

  ok(isRoomFull(room));
});

test("empty room that fits one zombie is not full", () => {
  const room: IRoom = createRoom(1);

  ok(!isRoomFull(room));
});

test.skip("room with no capacity cannot fit any zombies", () => { });

test.skip("one-roomer becomes full when a zombie is added", () => { });

test.skip("two-roomer is not full when a zombie is added", () => { });

test.skip("second zombie consumes first zombie when added to a one-roomer", () => { });

// You are free to add more tests that you think are relevant!
