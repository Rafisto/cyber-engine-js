type MapElement = {
    structure: string[][];
    position: {
        x: number;
        y: number;
    };
};

const create2DArray = (width: number, height: number): string[][] => {
    const array: string[][] = [];
    for (let i = 0; i < height; i++) {
        array[i] = [];
        for (let j = 0; j < width; j++) {
            array[i][j] = " ";
        }
    }
    return array;
};

const size = 50;

type useDisplayType = {
    getPlayerPosition: { (): { x: number; y: number } };
    getMap: { (): MapElement[] };
};

const useDisplay = ({ getPlayerPosition, getMap }: useDisplayType) => {
    const display = create2DArray(size, size);
    const player_position = getPlayerPosition();

    getMap().forEach((element: MapElement) => {
        const { structure, position } = element;
        const { x, y } = position;

        for (let i = 0; i < structure.length; i++) {
            for (let j = 0; j < structure[0].length; j++) {
                const char = structure[i][j];
                const relativeX = x - player_position.x + size / 2 + j;
                const relativeY = y - player_position.y + size / 2 + i;

                if (relativeX >= 0 && relativeX < size && relativeY >= 0 && relativeY < size) {
                    display[relativeY][relativeX] = char;
                }
            }
        }
    });

    display[size / 2][size / 2] = "P";

    return display.map((row) => row.join("")).join("\n");
};

export default useDisplay;
