function cov_91xw5xvv() {
  var path = "/home/sam/git/AzureDevOpsConcertHub/src/scripts/booking.js";
  var hash = "0955986310eccabdf17f7d3af5a73b66be731229";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/sam/git/AzureDevOpsConcertHub/src/scripts/booking.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 22
        },
        end: {
          line: 2,
          column: 70
        }
      },
      "1": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 44
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 35
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 62
        }
      },
      "4": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 62
        }
      },
      "5": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "updateTotal",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1,
            column: 28
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0955986310eccabdf17f7d3af5a73b66be731229"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_91xw5xvv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_91xw5xvv();

function updateTotal(index) {
  cov_91xw5xvv().f[0]++;
  var ticketPrice = (cov_91xw5xvv().s[0]++, document.getElementById("ticketPrice").innerText);
  var newPrice = (cov_91xw5xvv().s[1]++, (index + 1) * ticketPrice);
  cov_91xw5xvv().s[2]++;
  newPrice = newPrice.toFixed(2);
  cov_91xw5xvv().s[3]++;
  document.getElementById("tempPrice").innerText = newPrice;
  cov_91xw5xvv().s[4]++;
  document.getElementById("numTickets").value = index + 1;
  cov_91xw5xvv().s[5]++;
  document.getElementById("totalAmount").value = newPrice;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmcuanMiXSwibmFtZXMiOlsidXBkYXRlVG90YWwiLCJpbmRleCIsInRpY2tldFByaWNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsIm5ld1ByaWNlIiwidG9GaXhlZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlosU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTtBQUN4QixNQUFJQyxXQUFXLDJCQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNDLFNBQTFDLENBQWY7QUFFQSxNQUFJQyxRQUFRLDJCQUFHLENBQUNMLEtBQUssR0FBRyxDQUFULElBQWNDLFdBQWpCLENBQVo7QUFId0I7QUFJeEJJLEVBQUFBLFFBQVEsR0FBR0EsUUFBUSxDQUFDQyxPQUFULENBQWlCLENBQWpCLENBQVg7QUFKd0I7QUFNeEJKLEVBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsU0FBckMsR0FBaURDLFFBQWpEO0FBTndCO0FBT3hCSCxFQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NJLEtBQXRDLEdBQStDUCxLQUFLLEdBQUcsQ0FBdkQ7QUFQd0I7QUFReEJFLEVBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q0ksS0FBdkMsR0FBK0NGLFFBQS9DO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB1cGRhdGVUb3RhbChpbmRleCkge1xuICAgIHZhciB0aWNrZXRQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlja2V0UHJpY2VcIikuaW5uZXJUZXh0O1xuXG4gICAgdmFyIG5ld1ByaWNlID0gKGluZGV4ICsgMSkgKiB0aWNrZXRQcmljZTtcbiAgICBuZXdQcmljZSA9IG5ld1ByaWNlLnRvRml4ZWQoMik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBQcmljZVwiKS5pbm5lclRleHQgPSBuZXdQcmljZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bVRpY2tldHNcIikudmFsdWUgPSAoaW5kZXggKyAxKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsQW1vdW50XCIpLnZhbHVlID0gbmV3UHJpY2U7XG59Il19