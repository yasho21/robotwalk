function robotWalk(X: number[]): [number, number] {
    // Starting position and initial direction
    let x = 0, y = 0;
    let direction = 0; // 0: North, 1: East, 2: South, 3: West
    
    // To track visited coordinates
    const visited = new Set<string>();
    visited.add(`${x},${y}`);

    // Iterate through each instruction in X
    for (const steps of X) {
        // Move in the current direction one step at a time
        for (let i = 0; i < steps; i++) {
            // Move according to the current direction
            switch (direction) {
                case 0: y++; break;  // Moving North
                case 1: x++; break;  // Moving East
                case 2: y--; break;  // Moving South
                case 3: x--; break;  // Moving West
            }

            // Check if we've visited this coordinate before
            const key = `${x},${y}`;
            if (visited.has(key)) {
                return [x, y]; // Stop and return the repeated coordinate
            }

            // Mark the current position as visited
            visited.add(key);
        }

        // Turn right after completing each instruction
        direction = (direction + 1) % 4;
    }

    // If the robot completes all instructions without revisiting any point, return its final position
    return [x, y];
}
