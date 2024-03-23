# n = 5
# res = 1
# for i in range(1,n):
#     res = res * i

# print(res)

def recur(n):
    if n >= 1:
        return n * recur(n-1)
    return 1
print(recur(5))
