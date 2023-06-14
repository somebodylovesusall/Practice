# Runtime Complexity

## Purpose
### How performant an algorithm is
- 어떤 알고리즘의 수행력을 나타내는 지표
- 주어진 하나의 해결 방법이 다른 방법보다 더 나은지를 결정하기 위한 구체적인 방법

## Types
### Common Runtimes : Big 'O' Notation
- Constant Time : `O(1)`  
얼마나 많은 요소가 있는지와 관계없이 동일한 시간 소요
- Logarithmic Time : `O(logn)`  
요소를 두 배로 늘려도 두 배 보다 적은 시간 소요
- Linear Time : `O(n)`    
요소 하나를 추가하면 하나의 단위만큼 소요 시간 증가
- Quasilinear Time : `O(nlogn)`  
요소 하나를 추가하면 하나의 단위 그 이상으로 소요 시간 증가
- Quadratic Time : `O(n^2)`  
집합 내 모든 요소를 다른 모든 요소와 비교
- Exponential Time : `O(2^n)`  
집합 내 요소 하나를 추가하면 급격하게 소요 시간 증가

## Examples
- 단일 `collection`에 대한 단순 `for` 반복문 수행: O(n)
- 단일 `collection` 절반에 대한 단순 `for` 반복문 수행: O(n)
- 두 개의 `collections`에 대한 분리된 `for` 반복문 수행: O(n + m)
- 동일한 `collection`에 대한 두 개의 중첩된 `for` 반복문 수행: O(n^2)
- 다른 `collections`에 대한 두 개의 중첩된 `for` 반복문 수행: O(nm)
- 정렬 연산: O(nlogn)
- 탐색 연산: O(logn)
