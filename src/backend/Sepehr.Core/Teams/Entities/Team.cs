namespace Sepehr.Core.Teams.Entities;

public sealed class Team : AggregateRoot<Guid>
{
    public string TeamName { get; private set; } = string.Empty;
}