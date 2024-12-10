class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def create_linked_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def linked_list_to_array(head):
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

# User's submitted code
def reverseList(head):
    # This is an intentionally incorrect solution to show failure case
    return head  # Just returns the list unchanged to demonstrate failure

# Test cases
test_cases = [
    {"input": [1, 2, 3, 4, 5], "expected": [5, 4, 3, 2, 1]},
    {"input": [1, 2], "expected": [2, 1]},
    {"input": [], "expected": []},
    {"input": [1], "expected": [1]}
]

# Run tests
try:
    for i, test in enumerate(test_cases, 1):
        # Create linked list from input array
        head = create_linked_list(test["input"])
        
        # Print input state
        print(f"\nTest case {i}:")
        print(f"Input: {test['input']}")
        
        # Run user's solution
        try:
            result_head = reverseList(head)
            # Convert result back to array
            result = linked_list_to_array(result_head)
            
            # Compare with expected output
            success = result == test["expected"]
            print(f"Expected: {test['expected']}")
            print(f"Got: {result}")
            print("Failed" if not success else "✓ Passed")
        except Exception as e:
            print(f"Error during execution: {str(e)}")
            print("Failed")
except Exception as e:
    print(f"An error occurred: {str(e)}")