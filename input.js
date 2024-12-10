class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function createLinkedList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// User's submitted code
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}

// Test cases
const testCases = [
    { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
    { input: [1, 2], expected: [2, 1] },
    { input: [], expected: [] },
    { input: [1], expected: [1] }
];

// Run tests
try {
    testCases.forEach((test, i) => {
        // Create linked list from input array
        const head = createLinkedList(test.input);
        
        // Print input state
        console.log(`\nTest case ${i + 1}:`);
        console.log(`Input: ${JSON.stringify(test.input)}`);
        
        try {
            // Run user's solution
            const resultHead = reverseList(head);
            
            // Convert result back to array
            const result = linkedListToArray(resultHead);
            
            // Compare with expected output
            const success = JSON.stringify(result) === JSON.stringify(test.expected);
            console.log(`Expected: ${JSON.stringify(test.expected)}`);
            console.log(`Got: ${JSON.stringify(result)}`);
            console.log(success ? "✓ Passed" : "Failed");
        } catch (e) {
            console.log(`Error during execution: ${e.message}`);
            console.log("Failed");
        }
    });
} catch (e) {
    console.log(`An error occurred: ${e.message}`);
}




