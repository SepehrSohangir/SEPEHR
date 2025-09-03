using Sepehr.Core.Roles.Entities;

namespace Sepehr.Core.Personnel.Entities;

public class Person : AggregateRoot<Guid>
{
    public string ProfileImage { get; private set; } = null!;
    public string FirstName { get; private set; } = null!;
    public string LastName { get; private set; } = null!;
    public string UserName { get; private set; } = null!;
    public Role Role { get; private set; } = null!;

}