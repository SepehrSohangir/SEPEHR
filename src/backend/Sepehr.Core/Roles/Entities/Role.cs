namespace Sepehr.Core.Roles.Entities;

public sealed class Role : AggregateRoot<Guid>
{
    public string RoleName { get; private set; } = string.Empty;
}