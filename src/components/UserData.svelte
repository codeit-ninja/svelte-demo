<script lang="ts">
    import { users } from "../stores/userStore";
</script>

{#await users.load()}
    <!-- Hier zou je dan uiteraard een spinner neer kunnen zetten -->
    <span>Loading users ...</span>
{:then} 
    <table>
        <thead>
            <tr>
                {#each Object.entries($users[0]) as [key] }
                    <th>{key.toUpperCase()}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each $users as user }
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/await}

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    table th,
    table td {
        text-align: left;
        padding: .3rem;
    }

    table tr:nth-child(even) {
        background-color: #ededed;
    }
</style>