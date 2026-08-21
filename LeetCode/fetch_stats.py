import urllib.request
import json
import sys
import os

# Fix encoding for Windows terminal
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

def fetch_leetcode_stats(username="kunalsingh2936"):
    url = "https://leetcode.com/graphql"
    query = """
    query getFullProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          ranking
          reputation
        }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
      recentAcSubmissionList(username: $username, limit: 5) {
        id
        title
        titleSlug
        timestamp
      }
    }
    """
    data = json.dumps({"query": query, "variables": {"username": username}}).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'})
    
    try:
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode('utf-8'))
            user = res.get("data", {}).get("matchedUser")
            if not user:
                print(f"User '{username}' not found!")
                return
            
            stats = {item['difficulty']: item['count'] for item in user['submitStatsGlobal']['acSubmissionNum']}
            recent = res.get("data", {}).get("recentAcSubmissionList", [])

            print("=" * 50)
            print(f" LEETCODE PROFILE: {username}")
            print("=" * 50)
            print(f" Total Solved : {stats.get('All', 0)}")
            print(f" Easy         : {stats.get('Easy', 0)}")
            print(f" Medium       : {stats.get('Medium', 0)}")
            print(f" Hard         : {stats.get('Hard', 0)}")
            print(f" Global Rank  : {user['profile'].get('ranking', 'N/A')}")
            print("-" * 50)
            print(" Recent Accepted Submissions:")
            for item in recent:
                print(f"   • {item['title']} (https://leetcode.com/problems/{item['titleSlug']}/)")
            print("=" * 50)

    except Exception as e:
        print(f"Error fetching stats: {e}")

if __name__ == "__main__":
    uname = sys.argv[1] if len(sys.argv) > 1 else "kunalsingh2936"
    fetch_leetcode_stats(uname)
