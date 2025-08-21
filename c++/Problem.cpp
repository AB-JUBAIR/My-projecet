#include <iostream>
#include <string>

using namespace std;
#include <vector>
#include <algorithm>

void find_secret_numbers(long long n, std::vector<long long>& results) {
    for (int zeros = 1; ; ++zeros) {
        long long pow10 = 1;
        for (int i = 0; i < zeros; ++i) pow10 *= 10;
        long long denom = pow10 + 1;
        if (denom > n) break;
        if (n % denom == 0) {
            long long x = n / denom;
            results.push_back(x);
        }
    }
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        long long n;
        cin >> n;
        std::vector<long long> xs;
        find_secret_numbers(n, xs);
        if (xs.empty()) {
            cout << "0\n";
        } else {
            cout << xs.size() << "\n";
            std::sort(xs.begin(), xs.end());
            for (auto x : xs) cout << x << " ";
            cout << "\n";
        }
    }
    return 0;
}
int main() {
    int length;
    cin >> length;
    string input;
    cin >> input;

    if (input.length() != length) {
        cout << "Warning: The entered string length does not match the specified length.\n";
    }

    // Use the input string as needed
    cout << "You entered: " << input << endl;

    return 0;
}